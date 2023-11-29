import useAuth from "../../../auth/composables/useAuth";

export const responseInterceptor = (res) => {
  const { access, refresh } = useAuth();
  console.log("response intercetor");
  console.log(res);

  return res;
};

export const responseErrorInterceptor = (err) => {
  console.log("response error intercetor");
  console.log(err);

  return err;
};
