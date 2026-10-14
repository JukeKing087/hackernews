# Getting into a Kubernetes Cluster with Nothing but SSH

| Field | Value |
|---|---|
| **Score** | 1 |
| **Author** | [draganm](https://news.ycombinator.com/user?id=draganm) |
| **Comments** | [0](https://news.ycombinator.com/item?id=50095901) |
| **Posted** | Wed, 14 Oct 2026 21:51:53 GMT |

## Link
https://fables-for-robots.ch/blog/getting-into-a-kubernetes-cluster-with-nothing-but-ssh/

## Article Preview
Getting Into a Kubernetes Cluster With Nothing but SSH | Fables for Robots FablesFor Robots About Services Projects Blog Contact 2026-10-14 · 9 min read · Dragan Milic Getting Into a Kubernetes Cluster With Nothing but SSH kosh runs inside a cluster and gives whoever holds an accepted SSH key a k9s-like terminal UI, over ssh or over iroh-ssh. #kubernetes #ssh #iroh Intro # To look at what runs in a Kubernetes cluster you need a kubeconfig with a credential in it, a way to reach the API server, and kubectl or k9s on the machine you sit at. For one person and one cluster that is fine. With more people and more clusters it becomes work. Every kubeconfig has to be made, handed over and at some point taken away again. The API server is usually on a private network, so there is a VPN or a bastion in front of it. And somebody who only wants to see why a pod keeps restarting has to install tools first. For machines, SSH has had an answer to this for a very long time. Everybody has the client a

---
_Auto-generated · Wed, 14 Oct 2026 21:57:12 GMT_
