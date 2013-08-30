class RemoveCanMentorFromUsers < ActiveRecord::Migration
  def up
    remove_column :users, :can_mentor
  end

  def down
    add_column :users, :can_mentor, :bool
  end
end
