function LinkFooter({ content }: any) {
    return (
        <>
            <a href="./" className="link block mb-[8px] text-textSecondary no-underline hover:underline">
                {content}
            </a>
        </>
    );
}

export default LinkFooter;
