import { List$1 } from 'System.Collections.Generic';
import { Resources } from 'UnityEngine';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import ExplaneSO from './VO/ExplaneSO'

export default class ExplanePanel extends ZepetoScriptBehaviour {
    public explanes: ExplaneSO[];

    Start() {
        let explane = Resources.Load("ExplaneSO");
    }

}