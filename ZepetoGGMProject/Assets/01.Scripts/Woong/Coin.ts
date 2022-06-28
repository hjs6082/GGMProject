import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import { Collision, GameObject, Object, Quaternion, Time, Transform, Vector3 } from 'UnityEngine'
import ScoreManager from './ScoreManager';

export default class Coin extends ZepetoScriptBehaviour {

    public increase:float;
    public coinTrm:Transform;
    public curRot:Vector3;

    Awake()
    {
        this.InitValue();
    }

    Update()
    {
        if(this.coinTrm != null)
        this.Spin();
    }

    InitValue()
    {
        this.coinTrm = this.GetComponent<Transform>();
    }

    Spin()
    {
        this.curRot = this.coinTrm.rotation.eulerAngles;
        this.curRot.y += Time.deltaTime * 10.0;
        this.coinTrm.rotation = Quaternion.Euler(this.curRot);
    }

    OnTriggerEnter(cols:Collision)
    {
        ScoreManager.instance?.GetCoin();
        Object.Destroy(this.gameObject);
    }
}