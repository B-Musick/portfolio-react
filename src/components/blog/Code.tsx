import React from "react";
import { BlogComponentType } from "../../lib/types";

import CopyToClipboard from 'react-copy-to-clipboard';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { useState } from 'react';
import { FaCopy } from "react-icons/fa6";
import { FaCheckSquare } from "react-icons/fa";

const Code: React.FC<BlogComponentType> =({children}) => {
    const [copied, setCopied] = useState(false);
    let fileName = String(children).split('\n')[0] != '-' ? String(children).split('\n')[0]: ''
    
    if(fileName){
        let childrenSize = String(children).split('\n').length
        children = String(children).split('\n').splice(1,childrenSize).join('\n')
    }

    return (
        <div className="relative w-full my-6 dark:!text-white">
            <span className="absolute left-0 bg-black text-white italic pr-1 extra-bold">{fileName}</span>

            <CopyToClipboard 
                className="absolute right-1 top-2" 
                text={children} 
                onCopy={()=> setCopied(true)}
            >
                <button>
                    {copied ? <FaCheckSquare /> : <FaCopy />}
                </button>
            </CopyToClipboard>
            <SyntaxHighlighter 
                useInlineStyles={false} 
                className="bg-gray-100 py-5 px-2 dark:bg-gray-800 overflow-auto rounded-xl" 
                codeTagProps={{className:'dark:text-white'}}
            >
                {children}
            </SyntaxHighlighter>
        </div>
    )
}

export default Code;