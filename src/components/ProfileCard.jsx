const ProfileCard = ({name, bio, avatarUrl}) => {
  return (
    <div className="flex justify-center border border-gray-100 shadow-md mb-4 max-w-xl p-4">
      <div>
        <img className="mx-auto pt-4 w-24 h-24 rounded-full object-cover" src={avatarUrl} alt={name} />
        <div className="mt-4">
          <h3 className="mb-4 text-2xl font-bold">{name}</h3>
          <p className="mb-4">{bio}</p>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard