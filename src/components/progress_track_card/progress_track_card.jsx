'use client'

import { SeparatorPri } from "../custom_ui/separator";
import { Table_Progress_Track } from "../custom_ui/table";

const Progress_Track_Card = (props) => {
    return (
        <div className={`progress_track_card h-[21.92rem] overflow-hidden overflow-y-auto rounded-lg ${props.class}`}>
            <div className="sticky top-0 z-10 bg-white">
                <h1 className="text-xl font-semibold text-[#344767] p-3 py-4"> Progress Track </h1>
                <SeparatorPri class={{a:'mx-3', b: 'mb-0'}} />
            </div>
           <Table_Progress_Track />
        </div>
    );
}

export default Progress_Track_Card;