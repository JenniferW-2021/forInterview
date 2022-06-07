# Solution for Code Challenge Kubernetes Pod Evaluation Service

## prerequisite

* pre-install docker  <br> 
* pre-install Kind  <br> 

## Create a three-node cluster:

* create config.yaml file

`vim config.yaml`

```
kind: Cluster
apiVersion: kind.x-k8s.io/v1alpha4
nodes:
- role: control-plane
- role: worker
- role: worker 
```

`:wq`


 
`kind create cluster --config=config.yaml`

* run the js code to get the result

`node task.js`

![result](/result.png)


