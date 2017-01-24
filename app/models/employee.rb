class Employee < ApplicationRecord
  validates :name, :email, :manager, presence: true
  validates_format_of :email, with: /@/
end
