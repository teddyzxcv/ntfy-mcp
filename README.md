# ntfy-mcp: Your Friendly Task Completion Notifier

Welcome to ntfy-mcp, the MCP server that keeps you caffeinated and informed! 🚀☕️

This handy little server integrates with the Model Context Protocol to send you delightful ntfy notifications whenever your AI assistant completes a task. Because let's face it - you deserve that tea break while your code writes itself.

<a href="https://glama.ai/mcp/servers/@teddyzxcv/ntfy-mcp">
  <img width="380" height="200" src="https://glama.ai/mcp/servers/@teddyzxcv/ntfy-mcp/badge" />
</a>

## Getting Started: The Quick Brew Guide

### Step 1: Clone & Navigate
```bash
git clone https://github.com/teddyzxcv/ntfy-mcp.git
cd ntfy-mcp
```

### Step 2: Install 
```bash
npm install
```

### Step 3: Build 
```bash
npm run build
```

### Step 4: Connect
Choose your adventure:

**Manual Start:**
```bash
npm start
```

**Cline Configuration:**
```json
"ntfy-mcp": {
  "command": "node",
  "args": [
    "/path/to/ntfy-mcp/build/index.js"
  ],
  "env": {
    "NTFY_TOPIC": "<your topic name>"
  },
  "autoApprove": [
    "notify_user" // Highly recommended for maximum chill
  ]
}
```

### Step 5: Get Notified in Style
1. Download the [ntfy app](https://ntfy.sh) on your phone
2. Subscribe to your chosen topic
3. Kick back and relax

### Step 6: The Magic Command
Write a prompt like this, otherwise the function won't call 
(tried use `Custom Instructions` in cline, but they are in the ring 3, so model just forget about it)
```
Write me a hello world in python, notify me when the task is done
```

### Step 7: Enjoy Your Beverage of Choice
☕️🍵 Your notification will arrive when the task is complete. No peeking!

## How It Works (The Technical Tea)

This MCP server integrates seamlessly with the Model Context Protocol, acting as your personal notification butler. When tasks are completed, it sends notifications via ntfy, keeping you informed without interrupting your flow.

## Dependencies: The Secret Sauce

- [@modelcontextprotocol/sdk](https://github.com/modelcontextprotocol/typescript-sdk)
- [node-fetch](https://github.com/node-fetch/node-fetch)
- [dotenv](https://github.com/motdotla/dotenv)
- [zod](https://github.com/colinhacks/zod)



## License

This project is licensed under the Apache License 2.0 - see the [LICENSE](LICENSE) file for details.

```
Copyright 2025 Casey Hand @cyanheads

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```

---

Now go forth and code with confidence, knowing your notifications are in good hands! 🎉
