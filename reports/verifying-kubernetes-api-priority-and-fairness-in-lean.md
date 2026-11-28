# Verifying Kubernetes API Priority and Fairness in Lean

| Field | Value |
|---|---|
| **Score** | 1 |
| **Author** | [habitmelon](https://news.ycombinator.com/user?id=habitmelon) |
| **Comments** | [0](https://news.ycombinator.com/item?id=50674158) |
| **Posted** | Sat, 28 Nov 2026 03:12:30 GMT |

## Link
https://functorial.inc/blog/2026/verifying-kubernetes-api-flow-control/

## Article Preview
Verifying formal models of K8s APF and using spec engineering to generate bug fixes · Functorial Functorial Home Blog About Contact Blog Verifying formal models of K8s APF and using spec engineering to generate bug fixes Tobi Lehman · November 2026 · GitHub repository The Kubernetes API server has an open bug that Functorial's high precision spec engineering methodology would have prevented. The bug is in APF (API Priority and Fairness), which keeps, say, a buggy client that spams an API Server with a bunch of list requests from overwhelming the cluster. panic: runtime error: slice bounds out of range [3:2] ...queueset.removeQueueAndUpdateIndexes(...) ...queueset.(*queueSet).removeQueueIfEmptyLocked(...) The panic happens when a timer fires for a request that still holds seats in a queue the server has already removed. The timer runs in its own goroutine, so nothing recovers the panic, and the whole API server process exits. The component whose job is to keep the API server up under lo

---
_Auto-generated · Sat, 28 Nov 2026 03:14:37 GMT_
