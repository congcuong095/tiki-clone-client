import axios from 'axios';

interface Params {
    baseUrl: string;
    method: string;
}
const getConfig: Params = {
    baseUrl:
        'https://tiki.vn/api/personalish/v1/blocks/listings?limit=100&include=advertisement&aggregations=2&trackity_id=6fa0b8cb-cce6-2d8f-d1e3-145d2d7afc48&category=8594&page=1&urlKey=o-to-xe-may-xe-dap',
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

export async function getData() {
    // let data: any;
    // const res = await getAPI();
    // if (res.status === 200) {
    //     data = await res.data;
    // } else {
    //     console.log(res);
    // }
    const res = await getAPI();
    const data = await res.data;
    return data;
}

export async function getStaticProps() {
    // Instead of fetching your `/api` route you can call the same
    // function directly in `getStaticProps`
    const data = await getData();

    // Props returned will be passed to the page component
    return { props: { data } };
}
