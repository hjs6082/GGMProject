import { CanvasGroup } from 'UnityEngine';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'

export default class ExhibitPanel extends ZepetoScriptBehaviour {

    public static Instance: ExhibitPanel = null;

    private cvs: CanvasGroup;

    Awake() {
        this.cvs = this.GetComponent<CanvasGroup>();

        ExhibitPanel.Instance = this;
    }

    Start() {

    }


    Open() {
        this.OpenOrClose(true);
    }

    Close() {
        this.OpenOrClose(false);
    }

    OpenOrClose(open : bool) {
        this.cvs.alpha = open ? 1 : 0;
        this.cvs.interactable = open;
        this.cvs.blocksRaycasts = open;
    }
}