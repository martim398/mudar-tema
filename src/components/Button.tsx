import { useTheme } from "@/contexts/ThemeContext";

type Props ={
    label:string;
    onClick: () => void;
}

export const Button = ({label,onClick}:Props) => {
    const themeCtx = useTheme();

    return (
        <button
        className="border px-4 py-4 rouded-md bg-black text-white dark:bg-white dark:text-black"
        onClick={onClick}
        >
            {label}
        </button>
    )
}