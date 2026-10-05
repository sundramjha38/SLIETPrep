import { useState, useEffect } from "react";
import { Edit2, Save, X, LogOut } from "react-feather";
import AppLayout from "../../layout/AppLayout";
import { useNavigate } from "react-router";

// here the degree labels  and the branch labels  are two mapped thing which will show to ui what i want rather then the stored value

const DEGREE_LABELS = { degree: "B.Tech", diploma: "Diploma" };
const BRANCH_LABELS = {
  cse: "Computer Science & Engineering",
  ece: "Electronics & Communication Engineering",
  ee: "Electrical Engineering",
  me: "Mechanical Engineering",
  ce: "Civil Engineering",
};

const SEMESTER_LABELS = {
  1: "1st Semester",
  2: "2nd Semester",
  3: "3rd Semester",
  4: "4th Semester",
  5: "5th Semester",
  6: "6th Semester",
  7: "7th Semester",
  8: "8th Semester",
};

function Profile() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [editProfile, setEditProfile] = useState(profile);

  // this will deal with the saving and save error accordingly basicllay updating the profile

  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState("");

  // data fetching from the database

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/profile/get", {
          method: "GET",
          credentials: "include",
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Unable to fetch profile");
        }

        const fetchedProfile = {
          name: data.profile.userId.name,
          email: data.profile.userId.email,
          degreeType: data.profile.degreeType,
          branch: data.profile.branch,
          year: String(data.profile.year),
          semester: String(data.profile.semester),
        };

        setProfile(fetchedProfile);
        setEditProfile(fetchedProfile);
      } catch (error) {
        console.error("Fetch profile error:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  // we need to handle the option that will shown to the user once user slect the year
  const getSemesterOptions = (year) => {
    const y = Number(year);
    if (!y) return [];
    return [y * 2 - 1, y * 2];
  };

  // handling the edit buttton

  const handleEdit = () => {
    setEditProfile(profile);
    setSaveError("");
    setIsEditing(true);
  };

  // handling the cancel edit button

  const handleCancel = () => {
    setEditProfile(profile);
    setSaveError("");
    setIsEditing(false);
  };

  // handling save edit button

  const handleSave = async () => {
    try {
      setSaving(true);
      setSaveError("");
      const response = await fetch("http://localhost:5000/api/profile/update", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          degreeType: editProfile.degreeType,
          branch: editProfile.branch,
          year: editProfile.year,
          semester: editProfile.semester,
        }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Unable to update the profile");
      }
      setProfile(editProfile);
      setIsEditing(false);
    } catch (error) {
      console.error("Update profile error : ", error);
      setSaveError(error.message);
    } finally {
      setSaving(false);
    }
  };

  // handle change for the form data this will be not like all other form change track fucntion it will different as the sem is dependent upon the year we need to handle this separately using a variable called const

  const handleChange = (event) => {
    const { name, value } = event.target;

    setEditProfile((current) => {
      const updated = { ...current, [name]: value };

      if (name === "year") {
        updated.semester = String(Number(value) * 2 - 1);
      }

      return updated;
    });
  };

  // this function will deal with the logout of the user
  const handleLogout = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/logout", {
        method: "POST",
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error("Unable to logout");
      }

      navigate("/");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  //this part is for handling the laoding if data is not fetched and error like if there is any error or the profile of the user dont even exist

  if (loading)
    return (
      <AppLayout variant="profile" hasSidebar={false}>
        <p className="p-8">Loading...</p>
      </AppLayout>
    );
  if (error || !profile)
    return (
      <AppLayout variant="profile" hasSidebar={false}>
        <p className="p-8 text-red-600">{error || "Profile not found"}</p>
      </AppLayout>
    );

  return (
    <AppLayout variant="profile" hasSidebar={false}>
      <div className="mx-auto w-full max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Header */}
        <section>
          <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
            Account
          </p>

          <h1 className="mt-1 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            Profile
          </h1>

          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            Manage your account and academic information.
          </p>
        </section>

        {/* Account Information */}
        <section className="mt-8 rounded-xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
          <div className="border-b border-slate-200 px-5 py-4 dark:border-slate-800">
            <h2 className="text-base font-semibold text-slate-900 dark:text-white">
              Account Information
            </h2>

            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
              Your basic account details.
            </p>
          </div>

          <div className="grid gap-5 px-5 py-5 sm:grid-cols-2">
            <div>
              <p className="text-xs font-medium text-slate-400 dark:text-slate-500">
                Full Name
              </p>

              <p className="mt-1 text-sm font-medium text-slate-900 dark:text-white">
                {profile.name}
              </p>
            </div>

            <div>
              <p className="text-xs font-medium text-slate-400 dark:text-slate-500">
                Email
              </p>

              <p className="mt-1 break-all text-sm font-medium text-slate-900 dark:text-white">
                {profile.email}
              </p>
            </div>
          </div>
        </section>

        {/* Academic Information */}
        <section className="mt-6 rounded-xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
          <div className="flex items-center justify-between gap-4 border-b border-slate-200 px-5 py-4 dark:border-slate-800">
            <div>
              <h2 className="text-base font-semibold text-slate-900 dark:text-white">
                Academic Information
              </h2>

              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                This information determines your study content.
              </p>
            </div>

            {/* this is the edit button and and is only visibel when we are viewwing the profile data and not we are editing the data  */}
            {!isEditing && (
              <button
                type="button"
                onClick={handleEdit}
                className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
              >
                <Edit2 size={15} strokeWidth={1.8} />
                <span className="hidden sm:inline">Edit</span>
              </button>
            )}
          </div>

          {!isEditing ? (
            <div className="grid gap-x-8 gap-y-6 px-5 py-5 sm:grid-cols-2">
              <div>
                <p className="text-xs font-medium text-slate-400 dark:text-slate-500">
                  Degree Type
                </p>

                <p className="mt-1 text-sm font-medium text-slate-900 dark:text-white">
                  {DEGREE_LABELS[profile.degreeType] || profile.degreeType}
                </p>
              </div>

              <div>
                <p className="text-xs font-medium text-slate-400 dark:text-slate-500">
                  Branch
                </p>

                <p className="mt-1 text-sm font-medium text-slate-900 dark:text-white">
                  {BRANCH_LABELS[profile.branch] || profile.branch}
                </p>
              </div>

              <div>
                <p className="text-xs font-medium text-slate-400 dark:text-slate-500">
                  Year
                </p>

                <p className="mt-1 text-sm font-medium text-slate-900 dark:text-white">
                  {profile.year}
                </p>
              </div>

              <div>
                <p className="text-xs font-medium text-slate-400 dark:text-slate-500">
                  Semester
                </p>

                <p className="mt-1 text-sm font-medium text-slate-900 dark:text-white">
                  {profile.semester}
                </p>
              </div>
            </div>
          ) : (
            // this part is when the isediting is true then we need to render the form as well as give flexiability to edit it as well

            <div className="px-5 py-5">
              <div className="grid gap-5 sm:grid-cols-2">
                {/* div to show the degree type must match the enum value of the database */}
                <div>
                  <label className="text-xs font-medium text-slate-500 dark:text-slate-400">
                    Degree Type
                  </label>

                  <select
                    name="degreeType"
                    value={editProfile.degreeType}
                    onChange={handleChange}
                    className="mt-2 h-10 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 text-sm text-slate-900 outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                  >
                    <option value="degree">B.Tech</option>
                    <option value="diploma">Diploma</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-medium text-slate-500 dark:text-slate-400">
                    Branch
                  </label>

                  <select
                    name="branch"
                    value={editProfile.branch}
                    onChange={handleChange}
                    className="mt-2 h-10 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 text-sm text-slate-900 outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                  >
                    <option value="cse">Computer Science & Engineering</option>
                    <option value="ee">Electrical Engineering</option>
                    <option value="me">Mechanical Engineering</option>
                    <option value="ce">Civil Engineering</option>
                    <option value="ece">
                      Electronics & Communication Engineering
                    </option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-medium text-slate-500 dark:text-slate-400">
                    Year
                  </label>

                  <select
                    name="year"
                    value={editProfile.year}
                    onChange={handleChange}
                    className="mt-2 h-10 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 text-sm text-slate-900 outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                  >
                    <option value={1}>1st Year</option>
                    <option value={2}>2nd Year</option>
                    <option value={3}>3rd Year</option>
                    <option value={4}>4th Year</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-medium text-slate-500 dark:text-slate-400">
                    Semester
                  </label>

                  <select
                    name="semester"
                    value={editProfile.semester}
                    onChange={handleChange}
                    className="mt-2 h-10 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 text-sm text-slate-900 outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                  >
                    {getSemesterOptions(editProfile.year).map((sem) => (
                      <option key={sem} value={sem}>
                        {SEMESTER_LABELS[sem]}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              {/* this part handle the error while saving and show it accordingly in ui  */}
              {saveError && (
                <p className="mt-4 text-sm text-red-600 dark:text-red-400">
                  {saveError}
                </p>
              )}
              {/* Actions */}
              <div className="mt-6 flex justify-end gap-2 border-t border-slate-200 pt-5 dark:border-slate-800">
                {/* this is for cancel the edit that is cancel edit buttton */}

                <button
                  type="button"
                  onClick={handleCancel}
                  disabled={saving}
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-70 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
                >
                  <X size={15} strokeWidth={1.8} />
                  Cancel
                </button>

                {/* this is for save the edit button */}

                <button
                  type="button"
                  onClick={handleSave}
                  disabled={saving}
                  className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  <Save size={15} strokeWidth={1.8} />
                  {saving ? "Saving..." : "Save Changes"}
                </button>
              </div>
            </div>
          )}
        </section>
        {/* this is logout button from the page  */}

        <div className="mt-5 flex w-full justify-start">
          <button
            type="button"
            onClick={handleLogout}
            className="inline-flex items-center gap-2 rounded-lg border border-red-200 bg-white px-4 py-2 text-sm font-medium text-red-600 transition hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-500/20 dark:border-red-900/60 dark:bg-slate-900 dark:text-red-400 dark:hover:bg-red-950/30"
          >
            <LogOut size={15} strokeWidth={1.8} />
            Logout
          </button>
        </div>
      </div>
    </AppLayout>
  );
}

export default Profile;
