install docker
install Kind

`mkdir kind-cluster`
`cd kind-cluster`

`vim config.yaml`

input:

```
kind: Cluster
apiVersion: kind.x-k8s.io/v1alpha4
nodes:
- role: control-plane
- role: worker
- role: worker 
```

`:wq`


* create a three-node cluster:
* 
`kind create cluster --config=config.yaml`

*run the js code

`node task.js`


