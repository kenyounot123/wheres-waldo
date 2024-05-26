class User < ApplicationRecord
  validates :name, presence: true
  validates :record, presence: true
end
