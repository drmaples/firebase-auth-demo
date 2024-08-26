import { useContext } from "react";
import { AuthContext } from "./AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);


console.info(">>>>> IN HERE", user.accessToken);
fetch("http://localhost:8000/v1/user", {
headers: {
    "Content-Type": "application/json",
    "x-jwt": user.accessToken,
},
})
.then((data) => console.log(">>>> RESP", data));


  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div>
            <h1 className="text-5xl font-bold">{user?.displayName}</h1>
            <p className="py-6">{user?.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
