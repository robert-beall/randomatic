'use client'

import DisplayBox from "@/components/display-box";
import { type ReactNode, useState } from "react";

const Page = (): ReactNode => {
    const [generatedText, setGeneratedText] = useState('');
    return (
        <div className="columns-2">
            <form>
                <input name="test" type="text" />
            </form>
            <DisplayBox text={generatedText} />
        </div>
    );
}; 

export default Page;