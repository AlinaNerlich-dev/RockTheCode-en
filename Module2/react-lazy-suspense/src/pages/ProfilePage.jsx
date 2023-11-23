import { lazy, Suspense, useState } from "react";
const ProfileData = lazy(() => import("../components/ProfileData"));
const ProfilePage = () => {
  const [toggleData, setToggleData] = useState(false);
  return (
    <div>
      <h2>Profile Page 👤</h2>
      <hr />
      <button onClick={() => setToggleData(!toggleData)}>
        Display Profile Data
      </button>
      {toggleData ? (
        <Suspense fallback={<h2>Loading Profile...</h2>}>
          <ProfileData />
        </Suspense>
      ) : null}
    </div>
  );
};

export default ProfilePage;
