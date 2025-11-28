import type { ReactElement, ReactNode } from "react";

export interface TabProps {
    title: string, 
    children: ReactNode
};

export type TabComponent = ReactElement<TabProps>;

export default function Tab(props: TabProps) {
    return (
        <div className="tab">
            {props.children}
        </div>
    );
}
