class ChangeColumnType < ActiveRecord::Migration[7.1]
  def change
    remove_column :users, :record, :string
    add_column :users, :record, :integer
  end
end
