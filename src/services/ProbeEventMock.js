export default {
  "name": "appointments#index(2017-07-01)",
  "start_time": 1493249286.737799,
  "duration": 68.65900009870529,
  "params": {
    "month": "2017-07-01",
    "controller": "appointments",
    "action": "index"
  },
  "events": [
    {
      "name": null,
      "time": "2017-04-26T18:28:06.748-05:00",
      "transaction_id": "56428f4453799279ebde",
      "end": "2017-04-26T18:28:06.749-05:00",
      "children": [],
      "duration": 1.467,
      "caller": [
        "/Users/peter.wong/projects/hipaatitis/app/views/appointments/_calendar.erb:10:in `_app_views_appointments__calendar_erb__3295134750289568082_70115815633200'",
        "/Users/peter.wong/projects/hipaatitis/app/views/appointments/index.erb:1:in `_app_views_appointments_index_erb___589605663887644961_70115737748040'",
        "/Users/peter.wong/.rbenv/versions/2.2.3/lib/ruby/2.2.0/benchmark.rb:303:in `realtime'",
        "/Users/peter.wong/.rbenv/versions/2.2.3/lib/ruby/2.2.0/benchmark.rb:303:in `realtime'"
      ],
      "elapsed": 7.702,
      "sql": "SELECT COUNT(*) FROM \"appointments\" WHERE (\"appointments\".\"when\" BETWEEN $1 AND $2)",
      "connection_id": 70115749865540,
      "statement_name": null,
      "binds": [
        {
          "name": "when",
          "value_before_type_cast": "2017-07-01",
          "type": {
            "precision": null,
            "scale": null,
            "limit": null
          },
          "original_attribute": null,
          "value": "2017-07-01",
          "value_for_database": "2017-07-01"
        },
        {
          "name": "when",
          "value_before_type_cast": "2017-07-31",
          "type": {
            "precision": null,
            "scale": null,
            "limit": null
          },
          "original_attribute": null,
          "value": "2017-07-31",
          "value_for_database": "2017-07-31"
        }
      ]
    },
    {
      "name": "Appointment Load",
      "time": "2017-04-26T18:28:06.755-05:00",
      "transaction_id": "56428f4453799279ebde",
      "end": "2017-04-26T18:28:06.757-05:00",
      "children": [],
      "duration": 1.83,
      "caller": [
        "/Users/peter.wong/projects/hipaatitis/app/views/shared/_appointments.erb:4:in `group_by'",
        "/Users/peter.wong/projects/hipaatitis/app/views/shared/_appointments.erb:4:in `_app_views_shared__appointments_erb___252910302389831648_70115837940900'",
        "/Users/peter.wong/projects/hipaatitis/app/views/appointments/_calendar.erb:14:in `_app_views_appointments__calendar_erb__3295134750289568082_70115815633200'",
        "/Users/peter.wong/projects/hipaatitis/app/views/appointments/index.erb:1:in `_app_views_appointments_index_erb___589605663887644961_70115737748040'",
        "/Users/peter.wong/.rbenv/versions/2.2.3/lib/ruby/2.2.0/benchmark.rb:303:in `realtime'",
        "/Users/peter.wong/.rbenv/versions/2.2.3/lib/ruby/2.2.0/benchmark.rb:303:in `realtime'"
      ],
      "elapsed": 23.692,
      "sql": "SELECT \"appointments\".* FROM \"appointments\" WHERE (\"appointments\".\"when\" BETWEEN $1 AND $2)",
      "connection_id": 70115749865540,
      "statement_name": null,
      "binds": [
        {
          "name": "when",
          "value_before_type_cast": "2017-07-01",
          "type": {
            "precision": null,
            "scale": null,
            "limit": null
          },
          "original_attribute": null,
          "value": "2017-07-01",
          "value_for_database": "2017-07-01"
        },
        {
          "name": "when",
          "value_before_type_cast": "2017-07-31",
          "type": {
            "precision": null,
            "scale": null,
            "limit": null
          },
          "original_attribute": null,
          "value": "2017-07-31",
          "value_for_database": "2017-07-31"
        }
      ]
    },
    {
      "name": "Person Load",
      "time": "2017-04-26T18:28:06.784-05:00",
      "transaction_id": "56428f4453799279ebde",
      "end": "2017-04-26T18:28:06.785-05:00",
      "children": [],
      "duration": 1.138,
      "caller": [
        "/Users/peter.wong/projects/hipaatitis/app/controllers/application_controller.rb:6:in `current_user'",
        "/Users/peter.wong/projects/hipaatitis/app/views/layouts/_top.erb:14:in `_app_views_layouts__top_erb___3314833273690747243_70115816672780'",
        "/Users/peter.wong/projects/hipaatitis/app/views/layouts/application.html.erb:14:in `_app_views_layouts_application_html_erb__1254958814770586731_70115815667060'",
        "/Users/peter.wong/.rbenv/versions/2.2.3/lib/ruby/2.2.0/benchmark.rb:303:in `realtime'",
        "/Users/peter.wong/.rbenv/versions/2.2.3/lib/ruby/2.2.0/benchmark.rb:303:in `realtime'"
      ],
      "elapsed": 21.672,
      "sql": "SELECT  \"people\".* FROM \"people\" WHERE \"people\".\"id\" = $1 LIMIT $2",
      "connection_id": 70115749865540,
      "statement_name": "a1",
      "binds": [
        {
          "name": "id",
          "value_before_type_cast": 40,
          "type": {
            "precision": null,
            "scale": null,
            "limit": null,
            "range": "-2147483648...2147483648"
          },
          "original_attribute": null,
          "value": 40,
          "value_for_database": 40
        },
        {
          "name": "LIMIT",
          "value_before_type_cast": 1,
          "type": {
            "precision": null,
            "scale": null,
            "limit": null
          },
          "original_attribute": null,
          "value": 1
        }
      ]
    }
  ],
  "path": "/Users/peter.wong/projects/hipaatitis/tmp/sql_probe/appointments#index(2017-07-01)/1493249286.806904.yml"
};
