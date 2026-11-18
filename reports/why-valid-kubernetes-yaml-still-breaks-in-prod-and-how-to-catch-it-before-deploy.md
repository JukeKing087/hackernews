# Why valid Kubernetes YAML still breaks in prod and how to catch it before deploy

| Field | Value |
|---|---|
| **Score** | 1 |
| **Author** | [andronaft](https://news.ycombinator.com/user?id=andronaft) |
| **Comments** | [0](https://news.ycombinator.com/item?id=50540708) |
| **Posted** | Wed, 18 Nov 2026 01:27:29 GMT |

## Link
https://zhukovskyi.space/blog/kube-tooling-why/

## Article Preview
Why valid Kubernetes YAML still breaks in prod, and how to catch it before deploy · Andrii Zhukovskyi zhukovskyi .space products apps free tools blog about off-duty contact &#8592; all posts Why valid Kubernetes YAML still breaks in prod, and how to catch it before deploy 2026-11 &#183; engineering &#183; #kubernetes &#183; Andrii Zhukovskyi In short Linting a manifest checks the file, not the cluster it's going to. To catch deploy-time failures you also need the cluster's context (quotas, node sizes, LimitRanges, the Secrets and CRDs it references) and a diff against what is running now. k8s-guardian does both, fixes only what is safe to fix, and exports the same rules as admission policies so CI and the cluster agree. Running it on 30 popular Helm charts found five bugs in the tool itself, all fixed. At work I defined deployment and configuration standards across more than ten environments. Standards help, but nothing enforced them, so every few weeks something drifted: a Helm value,

---
_Auto-generated · Wed, 18 Nov 2026 01:41:27 GMT_
