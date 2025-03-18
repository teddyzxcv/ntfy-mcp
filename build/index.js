import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import fetch from 'node-fetch';
import * as dotenv from 'dotenv';
dotenv.config();
const NTFY_TOPIC = process.env.NTFY_TOPIC;
if (!NTFY_TOPIC) {
    console.error("NTFY_TOPIC environment variable not set.");
    process.exit(1);
}
// Create the MCP server
const server = new McpServer({
    name: "ntfy-mcp-server",
    version: "1.0.0"
});
// Add the task_complete tool
server.tool("notify_user", "Notify the user that certain task is complete/error/stopped and give the summary and title of the completed task", {
    taskTitle: z.string().describe("Current task title/status"),
    taskSummary: z.string().describe("Current task summary")
}, async ({ taskTitle, taskSummary }) => {
    try {
        const response = await fetch(`https://ntfy.sh/${NTFY_TOPIC}`, {
            method: "POST",
            body: taskSummary,
            headers: { "Title": taskTitle },
        });
        if (!response.ok) {
            throw new Error(`Failed to send ntfy notification. Status code: ${response.status}`);
        }
        return {
            content: [{
                    type: "text",
                    text: "ntfy notification sent successfully!"
                }]
        };
    }
    catch (error) {
        return {
            content: [{
                    type: "text",
                    text: `Failed to send ntfy notification: ${error.message}`
                }],
            isError: true
        };
    }
});
// Start the server with stdio transport
const transport = new StdioServerTransport();
server.connect(transport)
    .then(() => console.log("ntfy-mcp-server running on stdio"))
    .catch(err => console.error("Failed to start server:", err));
