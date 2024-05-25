class User < ApplicationRecord
  validates :name, presence: true
  validates :record, presence: truue
end
