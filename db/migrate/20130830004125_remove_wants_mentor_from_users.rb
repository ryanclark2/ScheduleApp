class RemoveWantsMentorFromUsers < ActiveRecord::Migration
  def up
    remove_column :users, :wants_mentor
  end

  def down
    add_column :users, :wants_mentor, :bool
  end
end
