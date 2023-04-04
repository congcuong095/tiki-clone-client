import classnames from 'classnames';

function Button({ children, className, onClick }: any) {
    return (
        <>
            <button
                onClick={onClick}
                className={classnames(
                    `cursor-pointer border-0 w-[92px] h-[38px] p-[4px] rounded-br-[8px]
                                     rounded-tr-[8px] bg-transparent text-primaryColor font-normal text-[14px]  leading-[150%] outline-0
                                     flex items-center justify-center relative`,
                    { [className]: className },
                )}
            >
                {children}
            </button>
        </>
    );
}

export default Button;
