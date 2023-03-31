import { DataContext } from '@/pages';
import { useContext, useState } from 'react';
import SelectInput from './FilterSidebar/SelectInput';
import { expandIcon, shortenIcon } from '@/src/assets/svg/icon';

function ServiceFilterSidebar({ service }: any) {
    const { param, setParam } = useContext<any>(DataContext);
    const newParam = { ...param };
    const [displayService, setDisplayService] = useState(false);

    const handleService = (value: any, select: boolean) => {
        if (select) {
            delete newParam['param'][value];
        } else {
            newParam['param'][value] = 1;
        }
        setParam(newParam);
    };

    return (
        <div className="list px-[16px] pb-[12px] border-t border-solid border-[#ebebf0]">
            <h4 className="list-title m-0 leading-[20px] block text-textPrimary text-[14px] py-[12px] font-medium">
                Dịch vụ
            </h4>
            <div className="list-main list-none">
                {service.map((item: any, index: number) => {
                    if (index >= 5) {
                        return (
                            <label
                                style={displayService ? { display: 'flex' } : { display: 'none' }}
                                key={item.query_name}
                                className="flex items-center text-[13px] leading-[16px] capitalize mb-[12px] text-textPrimary"
                                onClick={() => handleService(item.query_name, item.values[0].selected)}
                            >
                                <SelectInput content={item.display_name} image={item.icon} />
                            </label>
                        );
                    }
                    return (
                        <label
                            key={item.query_name}
                            className="flex items-center text-[13px] leading-[16px] capitalize mb-[12px] text-textPrimary"
                            onClick={() => handleService(item.query_name, item.values[0].selected)}
                        >
                            <SelectInput content={item.display_name} image={item.icon} />
                        </label>
                    );
                })}
            </div>
            {service.length > 5 && (
                <div
                    className="toggle text-[13px] font-medium flex items-center leading-[16px] text-primaryColor cursor-pointer"
                    onClick={() => setDisplayService(!displayService)}
                >
                    {displayService ? 'Thu gọn' : 'Xem thêm'}
                    {displayService ? shortenIcon : expandIcon}
                </div>
            )}
        </div>
    );
}

export default ServiceFilterSidebar;
