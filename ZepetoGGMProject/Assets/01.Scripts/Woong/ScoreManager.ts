import { Mathf, Time } from 'UnityEngine';
import { Image } from 'UnityEngine.UI'
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'

export default class ScoreManager extends ZepetoScriptBehaviour {
 
    public static instance:ScoreManager = null;
    public guageImg:Image = null;
    public score:float = 0.0;
    public maxScore:float = 100.0;
    public isGetCoin:bool = false;
    public isLevelUp:bool = false;

    Awake()
    {
        if(ScoreManager.instance == null)
        {
            ScoreManager.instance = this;
            return;
        }
    }

    Update()
    {
        if(this.isGetCoin)
        {
            var guageAmount = Mathf.Lerp(this.guageImg.fillAmount, this.score, Time.deltaTime * 7.5);
            this.guageImg.fillAmount = guageAmount / this.maxScore;

            if(this.score >= this.maxScore)
            {
                this.score -= this.maxScore;
                this.maxScore * 1.25;
            }
        }

        if(this.isLevelUp)
        {
            
        }
    }

    GetCoin()
    {
        this.score += 10.0;
        this.isGetCoin = true;
    }
}