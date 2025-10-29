
export default function ScrollSection(hashId: string) {
    const element = document.getElementById(hashId);
    if (element) {

        setTimeout(() => {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start"
            })
        }, 300);

        // window.location.hash = `#${hashId}`;
    }
}
