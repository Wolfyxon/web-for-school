import React, { Children, useState, type ReactNode } from "react";
import type { TabComponent, TabProps } from "./Tab";

export default function TabContainer(props: {children: TabComponent[]}) {
    const [currentIdx, setCurrentIdx] = useState(0);

    return (
        <div className="tab-container">
            <div className="tab-container-buttons">
                {(() => {
                    const res: ReactNode[] = [];

                    props.children.forEach((tab, i) => {
                        if(React.isValidElement(tab)) {
                            const tProps = tab.props as TabProps;

                            res.push(
                                <button onClick={() => setCurrentIdx(i)}>
                                    {tProps.title}
                                </button>
                            )
                        }                    
                    })

                    return res;
                })()}
            </div>
            <div className="tab-container-tabs">
                {(() => {
                    for(let i = 0; i < props.children.length; i++) {
                        const tab = props.children[i];

                        if(currentIdx == i) {
                            return tab;
                        }
                    }
                    return null;
                })()}
            </div>
        </div>
    )
}