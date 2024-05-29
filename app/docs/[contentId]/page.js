import ContentDisplay from "@/components/ContentDisplay";

export default function ContentPage({params:{contentId}}) {
    return (
        <div>
            <ContentDisplay id={contentId}/>
        </div>
    )
}
