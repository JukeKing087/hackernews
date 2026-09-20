# Google's Open Agentic Orchestrator

| Field | Value |
|---|---|
| **Score** | 3 |
| **Author** | [rochansinha](https://news.ycombinator.com/user?id=rochansinha) |
| **Comments** | [1](https://news.ycombinator.com/item?id=49776183) |
| **Posted** | Sun, 20 Sep 2026 14:20:17 GMT |

## Link
https://agentexecutor.io/

## Article Preview
AX AX GitHub Declare an agentic task. AX runs it at scale. AX sandboxes your task, wires up its workspace, fences its network, and helps you run billions of them per cluster. Either use a single task per agent, or compose as many as your agent needs. Get started View on GitHub Pause $ cat task.yaml apiVersion: ax.io/v1alpha1 kind: Workspace metadata: name: golang spec: git: - repo: https://github.com/golang/go.git branch: &#34;my-fix&#34; --- apiVersion: ax.io/v1alpha1 kind: Task metadata: name: test spec: workspaces: - name: golang goal: &#34;Ensure that Go tool chain is available and is built from source&#34; debug: true $ ax apply -f task.yaml workspace.ax.io/golang created task.ax.io/test created $ ax watch task test Watching task default/test... [10:42:01] Phase: Pending Actor: test WorkerIP: [10:42:05] Phase: Running Actor: test WorkerIP: 10.20.3.67 Task reached terminal phase &#34;Running&#34;. $ ax get tasks NAME ATESPACE PHASE ACTOR WORKER-IP AGE test default Running test 10.2

---
_Auto-generated · Sun, 20 Sep 2026 14:41:58 GMT_
