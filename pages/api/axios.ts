import axios from 'axios';


interface Params {
    baseUrl: string;
    method: string;
}
const getConfig: Params = {
    baseUrl:
        'https://tiki.vn/api/personalish/v1/blocks/listings?limit=40&include=advertisement&aggregations=2&trackity_id=c6f19eee-d118-ea27-ead1-840849028e16&category=8594&page=1&urlKey=o-to-xe-may-xe-dap',
    method: 'get',
};

export const getAPI = async (): Promise<any> => {
    return await axios({
        ...getConfig,
        url: `${getConfig.baseUrl}`,
    })
        .then((response) => {
            return {
                status: response.status,
                data: response.data,
            };
        })
        .catch((error) => {
            console.log(error);
            return {
                status: error.status,
                data: error.response,
            };
        });
};
