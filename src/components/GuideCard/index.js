import { Button } from "@material-ui/core"
export default function GuideCard(itemData){
    return(
        <>{itemData.map((item, i) => (
            <Button className="Typo" href={item.guideLink}>{item.guideName}</Button>
        ))}</>
    )
}