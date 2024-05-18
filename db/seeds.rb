# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end
require 'faker'

def generate_time_record_string
  time = Faker::Time.backward(days: rand(365))
  milliseconds = rand(1000) # Generate random milliseconds
  time.strftime("%M:%S:") + milliseconds.to_s.rjust(2, '0') # Pad milliseconds with zeros
end

User.delete_all
# Generate 5 fake users with names and time records
5.times do
  User.create(
    name: Faker::Name.name,
    record: generate_time_record_string
  )
end
