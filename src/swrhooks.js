import useSWR from "swr";

const useApi = () => {
  const fetcher = (url) => fetch(url).then((res) => res.json());

  // useSWR을 통해 데이터 가져오기
  const { data, error } = useSWR(
    "https://node-login-jwt-production.up.railway.app/home/test",
    fetcher
  );

  // 다른 컴포넌트들에 데이터를 넘겨줄때 구조
  // apiData = axios의res.data가 들어있다.
  // isLoading = 에러가 없고 데이터가 없을때 데이터를 받아오는 중이므로 로딩처리
  // isError = 데이터를 받아오는데 에러가 발생할경우
  return {
    data: data,
    error: !error && !data,
    isError: error,
  };
};
//test-swr-mui_table
export default useApi;
