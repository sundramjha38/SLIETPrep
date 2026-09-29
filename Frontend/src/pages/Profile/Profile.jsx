import { useState } from "react";
import { Edit2, Save, X } from "react-feather";

import AppLayout from "../../layout/AppLayout";

function Profile() {
  const [isEditing, setIsEditing] = useState(false);

  const [profile, setProfile] = useState({
    name: "Sundram Kumar Jha",
    email: "sundram@example.com",
    degreeType: "B.Tech",
    branch: "Computer Science & Engineering",
    year: "2nd Year",
    semester: "4th Semester",
  });

  const [editProfile, setEditProfile] = useState(profile);

  const handleEdit = () => {
    setEditProfile(profile);
    setIsEditing(true);
  };

  const handleCancel = () => {
    setEditProfile(profile);
    setIsEditing(false);
  };

  const handleSave = () => {
    setProfile(editProfile);
    setIsEditing(false);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setEditProfile((current) => ({
      ...current,
      [name]: value,
    }));
  };

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
                  {profile.degreeType}
                </p>
              </div>

              <div>
                <p className="text-xs font-medium text-slate-400 dark:text-slate-500">
                  Branch
                </p>

                <p className="mt-1 text-sm font-medium text-slate-900 dark:text-white">
                  {profile.branch}
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
            <div className="px-5 py-5">
              <div className="grid gap-5 sm:grid-cols-2">
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
                    <option>B.Tech</option>
                    <option>M.Tech</option>
                    <option>Diploma</option>
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
                    <option>Computer Science & Engineering</option>
                    <option>Electrical Engineering</option>
                    <option>Mechanical Engineering</option>
                    <option>Civil Engineering</option>
                    <option>Electronics & Communication Engineering</option>
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
                    <option>1st Year</option>
                    <option>2nd Year</option>
                    <option>3rd Year</option>
                    <option>4th Year</option>
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
                    <option>1st Semester</option>
                    <option>2nd Semester</option>
                    <option>3rd Semester</option>
                    <option>4th Semester</option>
                    <option>5th Semester</option>
                    <option>6th Semester</option>
                    <option>7th Semester</option>
                    <option>8th Semester</option>
                  </select>
                </div>
              </div>

              {/* Actions */}
              <div className="mt-6 flex justify-end gap-2 border-t border-slate-200 pt-5 dark:border-slate-800">
                <button
                  type="button"
                  onClick={handleCancel}
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
                >
                  <X size={15} strokeWidth={1.8} />
                  Cancel
                </button>

                <button
                  type="button"
                  onClick={handleSave}
                  className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
                >
                  <Save size={15} strokeWidth={1.8} />
                  Save Changes
                </button>
              </div>
            </div>
          )}
        </section>
      </div>
    </AppLayout>
  );
}

export default Profile;