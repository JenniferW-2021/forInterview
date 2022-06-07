const k8s = require('@kubernetes/client-node');

const kc = new k8s.KubeConfig();
kc.loadFromDefault();

const k8sApi = kc.makeApiClient(k8s.CoreV1Api);

k8sApi.listNamespacedPod('kube-system').then((res) => {

    isImagePrefixWith = images=>{
        return images.every(image => image.startsWith('bitnami/'));
    }

    isTeamLabelPresent = labels=>{
        const labelsKey = Object.keys(labels);
        if (labelsKey.map(item => item.find(item => item === "team")))
            if (labels.team)
            return true;
        else
            return false;    

    }

    isRecentStart = startTime=>{
        const date = new Date();
        const date1= new Date(startTime);
        const t1 = date.getTime();
        const t2 = date1.getTime();
        
        daysPast = Math.floor((t1-t2) / (1000*60*60*24)); 
        if (daysPast<7)
            return true;
        else
            return false;

    }


    const results = res.body.items.map(item=>{
        return{
            pod:(item.spec.containers.map(container=>container.name).flat()),
            rule_evaluation:[
                {
                    name:"image_prefix",
                    valid: isImagePrefixWith(item.spec.containers.map(container=>container.image).flat())
                },
                {
                    name:"team_label_present",
                    valid: isTeamLabelPresent(item=>item.metadata.labels)

                },
                {
                    name:"recent_start_time",
                    valid: isRecentStart(item.status.startTime)

                }

            ]
        }
    })
    console.log(results);
});
    