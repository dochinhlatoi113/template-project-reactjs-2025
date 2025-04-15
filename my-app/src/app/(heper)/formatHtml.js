
export default function FormatHtml({data}) {

    const decodeHtml = (html) => {
        const textarea = document.createElement("textarea");
        textarea.innerHTML = html;
        return textarea.value;
    };
    const decodedHtml = decodeHtml(data || "");
    return (
        <div
            dangerouslySetInnerHTML={{
                __html: decodedHtml,
            }}
        />
    );
}
