install docker
install Kind

➜ mkdir kind-cluster
➜ cd kind-cluster

➜ vim config.yaml

# three node (two workers) cluster config
kind: Cluster
apiVersion: kind.x-k8s.io/v1alpha4
nodes:
- role: control-plane
- role: worker
- role: worker

:wq



➜ kind create cluster --config=config.yaml
