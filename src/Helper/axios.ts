import axios from 'axios';

export const getAPIProduct = async (parameter: any): Promise<any> => {
    return await axios({
        url: `http://localhost:3001/product/listing`,
        method: 'get',
        params: { ...parameter },
    })
        .then(({ status, data }) => {
            return {
                status: status,
                data: data,
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

export const getAPISearch = async (keyword: any): Promise<any> => {
    return await axios({
        url: `https://tiki.vn/api/v2/search/suggestion`,
        method: 'get',
        params: {
            trackity_id: 'c6f19eee-d118-ea27-ead1-840849028e16',
            q: keyword,
        },
    })
        .then(({ status, data }) => {
            return {
                status: status,
                data: data,
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

// export async function getStaticProps() {
//     const data = await getData();

//     return { props: { data } };
// }

export const postAPIFake = async (data: any): Promise<any> => {
    return await axios({
        url: `http://localhost:3001/product/post`,
        method: 'post',
        data: data,
    })
        .then(({ status, data }) => {
            console.log(data);
            return {
                status: status,
                data: data,
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
