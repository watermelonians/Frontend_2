import { Card } from '@nextui-org/react';
import React, { useEffect, useRef } from 'react';

interface ProblemCategoryCardProps {
    title: string;
}
const ProblemCategoryCard: React.FC<ProblemCategoryCardProps> = ({
    title,
}) => {
    return (
        <div className={"p-3 w-80 flex-shrink-0 bg-gray-100 rounded-xl bg-[#0A274440]"}>
            <h3 className={"text-sm font-medium text-gray-900"}>Operation systems</h3>
            <ul className={"mt-2"}>
            <li className={""}>
                <a href="#" className={"block p-5 bg-white rounded shadow"}>
                <div className={"flex justify-between"}>
                    <p className={"text-sm font-medium leading-snug text-gray-900 text-left"}>
                    Add discount code to checkout page
                    </p>
                    <span>
                    <img
                        className={"h-6 w-6 rounded-full"}
                        src="https://i.pravatar.cc/100" alt="avatar"
                    />
                    </span> 
                </div>
                <div className={"flex justify-between items-baseline"}>
                    <div className={"text-sm text-gray-600"}>
                    <time dateTime="2019-09-14">Sep 14</time>
                    </div>
                    <div className={"mt-2"}>
                    <span className={"px-2 py-1 leading-tight inline-flex items-center bg-teal-100 rounded"}>
                        <svg className={"h-2 w-2 text-teal-500"} viewBox="0 0 8 8" fill="currentColor">
                        <circle cx="4" cy="4" r="3"/>
                        </svg>
                        <span className={"text-sm ml-2 font-medium text-teal-900"}>Feature Request</span>
                    </span>
                    </div>
                </div>
                </a>
            </li>

            <li className={"mt-3"}>
                <a href="#" className={"block p-5 bg-white rounded shadow"}>
                <div className={"flex justify-between"}>
                    <p className={"text-sm font-medium leading-snug text-gray-900 text-left"}>
                    Add discount code to checkout page
                    </p>
                    <span>
                    <img
                        className={"h-6 w-6 rounded-full"}
                        src="https://i.pravatar.cc/100" alt="avatar"
                    />
                    </span> 
                </div>
                <div className={"flex justify-between items-baseline"}>
                    <div className={"text-sm text-gray-600"}>
                    <time dateTime="2019-09-14">Sep 14</time>
                    </div>
                    <div className={"mt-2"}>
                    <span className={"px-2 py-1 leading-tight inline-flex items-center bg-teal-100 rounded"}>
                        <svg className={"h-2 w-2 text-teal-500"} viewBox="0 0 8 8" fill="currentColor">
                        <circle cx="4" cy="4" r="3"/>
                        </svg>
                        <span className={"text-sm ml-2 font-medium text-teal-900"}>Feature Request</span>
                    </span>
                    </div>
                </div>
                </a>
            </li>

            <li className={"mt-3"}>
                <a href="#" className={"block p-5 bg-white rounded shadow"}>
                <div className={"flex justify-between"}>
                    <p className={"text-sm font-medium leading-snug text-gray-900 text-left"}>
                    Add discount code to checkout page
                    </p>
                    <span>
                    <img
                        className={"h-6 w-6 rounded-full"}
                        src="https://i.pravatar.cc/100" alt="avatar"
                    />
                    </span> 
                </div>
                <div className={"flex justify-between items-baseline"}>
                    <div className={"text-sm text-gray-600"}>
                    <time dateTime="2019-09-14">Sep 14</time>
                    </div>
                    <div className={"mt-2"}>
                    <span className={"px-2 py-1 leading-tight inline-flex items-center bg-teal-100 rounded"}>
                        <svg className={"h-2 w-2 text-teal-500"} viewBox="0 0 8 8" fill="currentColor">
                        <circle cx="4" cy="4" r="3"/>
                        </svg>
                        <span className={"text-sm ml-2 font-medium text-teal-900"}>Feature Request</span>
                    </span>
                    </div>
                </div>
                </a>
            </li>

            <li className={"mt-3"}>
                <a href="#" className={"block p-5 bg-white rounded shadow"}>
                <div className={"flex justify-between"}>
                    <p className={"text-sm font-medium leading-snug text-gray-900 text-left"}>
                    Add discount code to checkout page
                    </p>
                    <span>
                    <img
                        className={"h-6 w-6 rounded-full"}
                        src="https://i.pravatar.cc/100" alt="avatar"
                    />
                    </span> 
                </div>
                <div className={"flex justify-between items-baseline"}>
                    <div className={"text-sm text-gray-600"}>
                    <time dateTime="2019-09-14">Sep 14</time>
                    </div>
                    <div className={"mt-2"}>
                    <span className={"px-2 py-1 leading-tight inline-flex items-center bg-teal-100 rounded"}>
                        <svg className={"h-2 w-2 text-teal-500"} viewBox="0 0 8 8" fill="currentColor">
                        <circle cx="4" cy="4" r="3"/>
                        </svg>
                        <span className={"text-sm ml-2 font-medium text-teal-900"}>Feature Request</span>
                    </span>
                    </div>
                </div>
                </a>
            </li>

            </ul>  
        </div>
    );
};

export default ProblemCategoryCard;