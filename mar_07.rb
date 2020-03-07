def dirReduc(arr)
  finalArr = []
  until arr === finalArr do
    finalArr = Array.new(arr)
    arr.each_with_index do |dir, index|
      if (arr[index+1] == "SOUTH" and dir == "NORTH") or (arr[index+1] == "NORTH" and dir == "SOUTH") or (arr[index+1] == "EAST" and dir == "WEST") or (arr[index+1] == "WEST" and dir == "EAST")
        arr.delete_at(index + 1)
        arr.delete_at(index)
      end
    end
  end
  return arr
end
