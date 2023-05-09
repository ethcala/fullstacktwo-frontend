export default function Listing(content:any) {
    return (<div>
        {content}
    </div>)
};

export async function getStaticProps(params:any) {
    const listing = await fetch("https://thecatscradle.azurewebsites.net/listing/" + params.listing_uuid);
    return {
        props: { ...listing }
    };
};