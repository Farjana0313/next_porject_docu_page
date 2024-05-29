import ContentDisplay from "@/components/ContentDisplay";

export default function SubContentPage({ params: { subContentId } }) {
    return (
        <div>
            <ContentDisplay id={subContentId}/>
        </div>
    )
}
