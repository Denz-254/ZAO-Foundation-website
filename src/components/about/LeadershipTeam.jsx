const team = [
  {
    name: "Board Chairperson",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Programs Director",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Community Coordinator",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Finance Officer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=800&q=80",
  },
];

const LeadershipTeam = () => {
  return (
    <section className="py-24 bg-[#F8F9FB]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#0B2C6B]">
            Leadership Team
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-sm"
            >
              <img
                src={member.image}
                alt={member.name}
                className="h-80 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="font-bold text-[#0B2C6B]">
                  {member.name}
                </h3>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default LeadershipTeam;