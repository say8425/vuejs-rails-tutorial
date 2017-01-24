class Employee < ApplicationRecord
  validates :name, :email, presence: true
  validates_format_of :email, with: /@/
end
