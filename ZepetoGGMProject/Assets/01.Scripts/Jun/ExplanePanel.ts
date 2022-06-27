import { List$1 } from 'System.Collections.Generic';
import { Collider, GameObject, Resources } from 'UnityEngine';
import { Text } from 'UnityEngine.UI';
import { ZepetoPlayers } from 'ZEPETO.Character.Controller';
import { ZepetoScriptableObject, ZepetoScriptBehaviour } from 'ZEPETO.Script'
import ExplaneSO from '../VO/ExplaneSO';

export default class ExplanePanel extends ZepetoScriptBehaviour {
    public explanes: ZepetoScriptableObject<ExplaneSO>[]; 
    @SerializeField() private explanePanelObj: GameObject;

    Start() {
        
    }

    OnTriggerEnter(coll: Collider) {
        var localP = ZepetoPlayers.instance.LocalPlayer.zepetoPlayer.character.gameObject;

        if (coll.gameObject == localP) {
            this.explanePanelObj.SetActive(true);
            this.explanePanelObj.transform.GetChild(1).GetComponent<Text>().text = this.explanes[0]["explaneText"];
            this.explanePanelObj.transform.GetChild(2).GetComponent<Text>().text = this.explanes[0]["explaneIndex"] + "/" + this.explanes.Length;
        }
    }

}