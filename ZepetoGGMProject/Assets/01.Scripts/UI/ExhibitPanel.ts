import { CanvasGroup, GameObject, Transform,Sprite, Debug} from 'UnityEngine';
import { Image, Text,Button } from 'UnityEngine.UI';
import { ZepetoScriptableObject, ZepetoScriptBehaviour } from 'ZEPETO.Script'
import UIVO from '../VO/UIVO';

export default class ExhibitPanel extends ZepetoScriptBehaviour {

    public static Instance: ExhibitPanel = null;

    private cvs: CanvasGroup;

    @SerializeField()
    private gameMainImg: Image;
    @SerializeField()
    private bannerImg: Image;

    private bannerSprites: Sprite[];

    @SerializeField()
    private buttonParent: Transform;

    private buttonList: Button[];

    @SerializeField()
    private gameNameText: Text;
    @SerializeField()
    private gameExplanationText: Text;
    @SerializeField()
    private madeByText: Text;

    Awake() {
        this.cvs = this.GetComponent<CanvasGroup>();

        if (ExhibitPanel.Instance != null) {
            GameObject.Destroy(this.gameObject);
        }
        ExhibitPanel.Instance = this;
    }

    Start() {
        this.buttonList = this.buttonParent.GetComponentsInChildren<Button>();
    }

    SetUI(exhibitSO: ZepetoScriptableObject<UIVO>) {
        //this.gameMainImg.sprite = uiVO.gameMainSprite;
        //this.bannerSprites = uiVO.bannerSprite;
        //this.bannerImg.sprite = this.bannerSprites[0];
        //this.gameNameText.text = uiVO.gameName;
        //this.gameExplanationText.text = uiVO.gameExplanation;
        //this.madeByText.text = uiVO.madeBy;


        //for (var i = 0; i < this.buttonList.length; i++) {
        //    var j = i;
                
        //    this.buttonList[j].onClick.RemoveAllListeners();
        //    this.buttonList[j].onClick.AddListener(() => {
        //        this.bannerImg.sprite = this.bannerSprites[j];
        //    });
        //}

        this.gameMainImg.sprite = exhibitSO["gameMainSprite"];
        this.bannerSprites = exhibitSO["bannerSprite"];
        this.bannerImg.sprite = this.bannerSprites[0];
        this.gameNameText.text = exhibitSO["gameName"];
        this.gameExplanationText.text = exhibitSO["gameExplanation"];
        this.madeByText.text = "Made by." + exhibitSO["madeBy"];

        for (var i = 0; i < this.buttonList.length; i++) {
            let j = i;

            this.buttonList[j].onClick.RemoveAllListeners();
            this.buttonList[j].onClick.AddListener(() => {
                this.bannerImg.sprite = this.bannerSprites[j];
            });
        }

        this.Open();
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