import { GameObject } from 'UnityEngine';
import { Button } from 'UnityEngine.UI'
import { ZepetoCamera, ZepetoPlayers } from 'ZEPETO.Character.Controller';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'


export default class TimeChangePanel extends ZepetoScriptBehaviour {
    public firstPersonButton: Button;
    public thirdPersonButton: Button;
    @SerializeField() private changePersonPanel: GameObject;
    Start() {
        this.firstPersonButton.onClick.AddListener(() => { this.SetFirstPerson(); });
        this.thirdPersonButton.onClick.AddListener(() => { this.SetThirdPerson(); }); 
    }

    SetFirstPerson() {
        ZepetoPlayers.instance.cameraData.minZoomDistance = 0.1;
        ZepetoPlayers.instance.cameraData.maxZoomDistance = 0.1;
        this.changePersonPanel.SetActive(false);
    }

    SetThirdPerson() {
        ZepetoPlayers.instance.cameraData.minZoomDistance = 1;
        ZepetoPlayers.instance.cameraData.maxZoomDistance = 15;
        this.changePersonPanel.SetActive(false); 
    }
}